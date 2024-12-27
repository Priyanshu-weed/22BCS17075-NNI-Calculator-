
from sklearn.linear_model import LinearRegression
import numpy as np

# Training data (Year, Score)
data = np.array([
    [2018, 65],
    [2019, 70],
    [2020, 75],
    [2021, 80],
])

X = data[:, 0].reshape(-1, 1)  # Years
y = data[:, 1]  # Scores

# Model training
model = LinearRegression()
model.fit(X, y)

# Predict future scores
future_years = np.array([[2022], [2023], [2024]])
predicted_scores = model.predict(future_years)

for year, score in zip(future_years.flatten(), predicted_scores):
    print(f"Predicted Score for {year}: {score:.2f}")
