from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

"""Database connection to xamp server """
DATABASE_URL = "mysql+mysqlconnector://reconcileai:HNG#9reconcileai@localhost:3306/Reconcile"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit= False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
        db: Session = SessionLocal()


        try:
            yield db
            db.commit()
        
        except Exception:
            db.rollback()

        finally:
            db.close()

            
        
