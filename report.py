import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

st.title("Student Data Analytics Dashboard")

data = {
    "Department": ["CSE", "BCA", "BBA", "B.Tech"],
    "Students": [50, 40, 30, 60]
}

df = pd.DataFrame(data)

st.subheader("Students by Department")
fig, ax = plt.subplots()
ax.bar(df["Department"], df["Students"])
st.pyplot(fig)

st.subheader("Male vs Female")

fig2, ax2 = plt.subplots()
ax2.pie(
    [72, 48],
    labels=["Male", "Female"],
    autopct="%1.1f%%"
)
st.pyplot(fig2)

st.subheader("Monthly Admissions")

monthly = pd.DataFrame({
    "Month": ["Jan","Feb","Mar","Apr","May","Jun"],
    "Admissions": [10,15,12,18,20,25]
})

st.line_chart(monthly.set_index("Month"))