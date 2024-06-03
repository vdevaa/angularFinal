import pandas as pd

# Load the solar.csv file
solar_data = pd.read_csv('./data/load.csv')

# Convert the 'Date' column to datetime format
solar_data['Date'] = pd.to_datetime(solar_data['Date'])

# Remove rows with zero solar production
filtered_solar_data = solar_data[solar_data['Load (kWh)'] > 0]

# Aggregate data by day and calculate the mean solar production per day
daily_solar_data = filtered_solar_data.resample('D', on='Date').mean().reset_index()

# Save the aggregated data to a new CSV file
daily_solar_data.to_csv('./data/daily_load.csv', index=False)

