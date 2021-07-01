from app import db


class Notes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    note_title = db.Column(db.String(64))
    note_text = db.Column(db.String(128))

