#!/usr/bin/python3
""" POST ENDPOINT FOR POSTING REVIEWS """
from fastapi import APIRouter,Depends
from model.Reconcile import Review
from sqlalchemy.orm import Session
from schema.review import CreateReview
from Config.db import Base, engine, get_db



router = APIRouter()
Base.metadata.create_all(bind=engine)


@router.get("/reviews")
def read_reviews(skip : int, limit: int=100, db: Session= Depends(get_db)):
    """Get all reviews from the db """
    review = db.query(Review).offset(skip).limit(limit).all
    return review


@router.post("/reviews")
def create_reviews(review: CreateReview, db: Session = Depends(get_db())):
    """Uploads a review to db

    Arg:
        Review class: uploaded review

    Returns:
        json object with success message
    """
    try:
            db_review = Review(**review.dict())
            db.add(db_review)
            db.commit()
            db.refresh(db_review)
            return db_review
            return {"message": "Thanks you for your review"}

    except Exception as e:
            return {
                "Error": f"{e} unable to sumbit review",
                "status": 400
                }



# @router.put("/reviews/{id}")
# def create_reviews(review: Review, id: int, attr):
#     """Update a review to f

#     Returns:
#         json object with success message
#     """
#    if not reviews:
#         raise HTTPException(status_code=404, detail="Reviews not found")
#     return reviews
#     return {"message": "Review updated"}
