import numpy as np
import sys
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder

from keras.models import Sequential
from keras.layers import Dense
from tensorflow.keras.optimizers import Adam
from keras import models  

def train_and_save():
    # Load the iris dataset
    iris_data = load_iris()  
    x = iris_data.data
    # Convert data to a single column
    y_ = iris_data.target.reshape(-1, 1)  

    # One Hot encode the class labels
    encoder = OneHotEncoder(sparse=False)
    y = encoder.fit_transform(y_)

    # Split the data for training and testing
    train_x, test_x, train_y, test_y = train_test_split(x, y, test_size=0.20)
    print(test_x)
    # Saving example of the test dataset to try the prediction afterward
    np.savetxt('test.out', test_x, delimiter=',')

    # Build the model
    model = Sequential()
    # The inputs are four floats: sepal length, sepal width, petal length, petal width.
    model.add(Dense(10, input_shape=(4,), activation='relu', name='fc1'))
    model.add(Dense(10, activation='relu', name='fc2'))
    model.add(Dense(3, activation='softmax', name='output'))

    # Adam optimizer with learning rate of 0.001
    optimizer = Adam(lr=0.001)
    model.compile(optimizer, loss='categorical_crossentropy',
                metrics=['accuracy'])

    #print(model.summary())

    # Train the model
    model.fit(train_x, train_y, verbose=2, batch_size=5, epochs=200)
    # Saving the model
    model.save('./model.h5')


#train_and_save()
# Test on unseen data
#loading the locally saved model
model = models.load_model('model.h5')


# Receiving inputs value from API request
test_x = np.asarray(sys.argv[1:], dtype=np.float64, order='C')

result = np.around(model.predict(np.expand_dims(test_x, axis=0))).astype(np.int)[0]
outputs = ['Setosa','Versicolor','Virginica']
outputs_vals, outputs_ints = np.unique(outputs, return_inverse=True)
print("It is a %s" % outputs_vals[result.astype(np.bool)][0])

