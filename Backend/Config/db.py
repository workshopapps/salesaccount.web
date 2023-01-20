from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

"""Database connection to xamp server """
DATABASE_URL = "mysql+mysqlconnector://root@localhost:3306/Reconcile"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit= False, autoflush=False, bind=engine)
Base = declarative_base()