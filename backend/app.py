import flask
from flask import Flask, request, jsonify, make_response, render_template
from modules.plantdisease import *

app = flask.Flask(__name__,template_folder='template')
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
    return render_template('./front.html')

# grape_black_rot- test.JPG
@app.route('/plantdisease', methods = ['GET'])
def get_product_by_id():
    print(request.args.get("filepath"))
    filepath = request.args.get("filepath")
    # load the image
    img = load_image(filepath)
    #prediction will be an array of values; index corresp to max value will be used to get the class label
    prediction = model.predict(img)
    predicted_class_name = class_labels[np.argmax(prediction)]
    return make_response(jsonify({"className": predicted_class_name}))

if __name__ == '__main__':
    model = define_model()
    path="./models/bestweights.hdf5"
    model.load_weights(path)
    app.run()