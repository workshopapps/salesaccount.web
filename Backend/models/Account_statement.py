from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Time,Float
from sqlalchemy.orm import relationship
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP 
from config.db import Base

class Account_file(Base):
     __tablename__ = "account_file"

     id = Column(Integer, primary_key=True, index=True)
     account_statement_url = Column(String(255), nullable = False)
     created_at = Column(TIMESTAMP(timezone= True), nullable = False, server_default = text ('now()'))

class Transaction_Statement (Base):
    __tablename__ = 'transaction_statement'
    id = Column(Integer, primary_key=True, index=True)
    description = Column(String(255), nullable=False)
    time = Column(Time, nullable = False)
    debit = Column(Float, nullable = False)
    credit = Column(Float, nullable = False)
    balaance = Column(Float, nullable = False)
    account_file_id = Column (Integer, ForeignKey("account_file.id"))


class Sales_file(Base):
     __tablename__ = "sales_file"

     id = Column(Integer, primary_key=True, index=True)
     sales_file_url = Column(String(255), nullable = False)
     created_at = Column(TIMESTAMP(timezone= True), nullable = False, server_default = text ('now()'))


class Sales_Record (Base):
    __tablename__ = 'sales_record'
    id = Column(Integer, primary_key=True, index=True)
    Description = Column(String(255), nullable=False)
    Reference = Column(String(255), nullable=False)
    time = Column(Time, nullable = False)
    debit = Column(Float, nullable = False)
    credit = Column(Float, nullable = False)
    balaance = Column(Float, nullable = False)
    sales_file_id = Column (Integer, ForeignKey("sales_file.id"))

class Reconcillation (Base):
    __tablename__ = 'reconcillation'
    id = Column(Integer, primary_key=True, index=True)
    amount_paid = Column(Float,nullable = False)
    reconcile = Column(Integer,nullable=False)
    sales_reocrd_id = Column (Integer, ForeignKey("sales_record.id"))
    transaction_statement_id = Column (Integer, ForeignKey("transaction_statement.id"))