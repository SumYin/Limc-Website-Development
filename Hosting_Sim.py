from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/', methods=['GET', 'POST', 'PUT', 'DELETE'])
def handle_request():
    print('Method: ', request.method)
    print('Headers: ', request.headers)
    print('Body: ', request.data)
    return 'Request received'

if __name__ == '__main__':
    app.run(port=5000)