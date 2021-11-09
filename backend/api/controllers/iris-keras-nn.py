"""
    A simple neural network written in Keras (TensorFlow backend) to classify the IRIS data
"""

import numpy as np
import json
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder

from keras.models import Sequential
from keras.layers import Dense
from tensorflow.keras.optimizers import Adam
from keras import models  

def train_and_save():
    iris_data = load_iris()  # load the iris dataset

    # The inputs are four floats: sepal length, sepal width, petal length, petal width.
    #inputs  = np.array(iris)[:,:4].astype(np.float)

    # Outputs are initially individual strings: setosa, versicolor or virginica.
    #outputs = np.array(iris)[:,4]

    # Convert the output strings to ints.
    #outputs_vals, outputs_ints = np.unique(outputs, return_inverse=True)
    # Encode the category integers as binary categorical vairables.
    #outputs_cats = kr.utils.to_categorical(outputs_ints)
    #inds = np.random.permutation(len(inputs))
    #train_inds, test_inds = np.array_split(inds, 2)
    #inputs_train, outputs_train = inputs[train_inds], outputs_cats[train_inds]
    #inputs_test,  outputs_test  = inputs[test_inds],  outputs_cats[test_inds]



    #print('Example data: ')
    #print(iris_data.data[:5])
    #print('Example labels: ')
    #print(iris_data.target[:5])

    x = iris_data.data
    y_ = iris_data.target.reshape(-1, 1)  # Convert data to a single column

    # One Hot encode the class labels
    encoder = OneHotEncoder(sparse=False)
    y = encoder.fit_transform(y_)
    # print(y)

    # Split the data for training and testing
    train_x, test_x, train_y, test_y = train_test_split(x, y, test_size=0.20)
    print(test_x)
    np.savetxt('test.out', test_x, delimiter=',')
    # Build the model

    model = Sequential()

    model.add(Dense(10, input_shape=(4,), activation='relu', name='fc1'))
    model.add(Dense(10, activation='relu', name='fc2'))
    model.add(Dense(3, activation='softmax', name='output'))

    # Adam optimizer with learning rate of 0.001
    optimizer = Adam(lr=0.001)
    model.compile(optimizer, loss='categorical_crossentropy',
                metrics=['accuracy'])

    #print('Neural Network Model Summary: ')
    #print(model.summary())

    # Train the model
    model.fit(train_x, train_y, verbose=2, batch_size=5, epochs=200)
    model.save('./model.h5')


# Test on unseen data
#print(test_x)

model = models.load_model('model.h5')
#train_and_save()
test_x = np.loadtxt('test.out', delimiter=',')
#results = model.evaluate(test_x, test_y)
print(test_x[0])
result = model.predict(np.expand_dims(test_x[0], axis=0))
print('result found:')
print(result)
#print('correct result')
#print(test_y[0])
#model.predict()
#print('Final test set loss: {:4f}'.format(results[0]))
#print('Final test set accuracy: {:4f}'.format(results[1]))
