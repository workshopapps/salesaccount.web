#!/usr/bin/python3
""" FILE STORAGE MODULE FOR REVIEWS """
import json


class FileStorage:
    """This class manages storage of reviews in JSON format"""
    __file_path = 'reviews.json'
    __objects = {}

    def all(self):
        """Returns a dictionary of reviews in storage"""
        return FileStorage.__objects

    def new(self, obj):
        """Adds new review to storage dictionary"""
        self.all().update({obj.to_dict()['__class__'] + '.' + obj.id: obj})

    def save(self):
        """Saves storage dictionary to file"""
        with open(FileStorage.__file_path, 'w') as f:
            temp = {}
            temp.update(FileStorage.__objects)
            for key, val in temp.items():
                temp[key] = val.to_dict()
            json.dump(temp, f)

    def reload(self):
        """Loads storage dictionary from file"""
        from ..models.base_model import BaseModel
        from ..models.review import Review

        classes = {'BaseModel': BaseModel,
                   'Review': Review
                }
        try:
            temp = {}
            with open(FileStorage.__file_path, 'r') as f:
                temp = json.load(f)
                for key, val in temp.items():
                        self.all()[key] = classes[val['__class__']](**val)
        except FileNotFoundError:
            pass

    def delete(self, obj=None):
        """Deletes an object from storage dictionary"""
        if obj:
            for key, val in FileStorage.__objects.items():
                if obj.id == val.id:
                    FileStorage.__objects.pop(key)
                    return

    def close(self):
        """Call the reload method."""
        self.reload()
