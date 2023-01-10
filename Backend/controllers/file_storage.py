#!/usr/bin/env python3
"""Module to define a serialization/deserialization engine
that saves objects to a file"""
import json

from os import path as os_path


class FileStorage:
    """class that defines a file storage engine for JSON serialization"""
    __file_path = "backend/reviews.json"
    __objects = {}

    def all(self) -> dict:
        """returns __objects"""
        return FileStorage.__objects

    def new(self, obj) -> None:
        """sets a new obj in __objects"""
        FileStorage.__objects[
            f"{obj.__class__.__name__}.{obj.id}"] = obj

    def save(self):
        """serializes __objects to a JSON file in __file_path"""
        with open(FileStorage.__file_path, 'w') as f:
            temp = {}
            temp.update(FileStorage.__objects)
            for key, val in temp.items():
                temp[key] = val.dict()
            json.dump(temp, f)

    def reload(self):
        """deserializes a json file at __file_path and save it in __objects"""
        models = import_models()
        if os_path.exists(FileStorage.__file_path):
            with open(f"{FileStorage.__file_path}", "r") as f:
                json_str = f.read()
                if len(json_str) == 0:
                    return
                loaded_dict = json.loads(json_str)
                FileStorage.__objects.clear()
                for key, obj_dict in loaded_dict.items():
                    obj_class = models[key.split(".")[0]]
                    FileStorage.__objects[key] = obj_class(**obj_dict)


def import_models():
    """imports the modules locally when called to avoid circular import"""
    from models.review import Review
    models = {
        "Review": Review
    }
    return models
