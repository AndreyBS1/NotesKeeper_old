from app import app
from app import db
from flask import request, jsonify
from app.notes_model import Notes


@app.route('/', methods=['GET'])
def show_notes():
    notes = Notes.query.all()
    res = []
    for note in notes:
        res.append({
            'id': note.id,
            'title': note.note_title,
            'text': note.note_text
        })
    print(res)
    return jsonify(res)


@app.route('/create', methods=['GET', 'POST'])
def create_note():
    if request.method == 'POST':
        payload = request.get_json()
        new_note = Notes(
            note_title=payload.get('note_title'),
            note_text=payload.get('note_text')
        )
        db.session.add(new_note)
        db.session.commit()
        return 'Note has been created'
    return 'Something went wrong'


@app.route('/delete', methods=['GET', 'POST'])
def delete_note():
    if request.method == 'POST':
        payload = request.get_json()
        print(payload)
        deleted_note = Notes.query.get(payload.get('note_id'))
        print(deleted_note)

        db.session.delete(deleted_note)
        db.session.commit()
        return 'Note has been deleted'
    return 'Something went wrong'


@app.route('/edit', methods=['GET', 'POST'])
def edit_note():
    if request.method == 'POST':
        payload = request.get_json()
        print(payload)
        edited_note = Notes.query.get(payload.get('note_id'))
        print(edited_note)

        edited_note.note_title = payload.get('new_note_title')
        edited_note.note_text = payload.get('new_note_text')

        db.session.commit()
        return 'Note has been edited'
    return 'Something went wrong'
