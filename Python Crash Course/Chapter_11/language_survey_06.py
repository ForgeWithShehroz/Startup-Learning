from survery_05 import AnynonymousSurvey

# Define a question and make a survey
question = "Which language did you first learn to speak? "

language_survey = AnynonymousSurvey(question)

# Show the question and store responses to the question.
language_survey.show_question()
print("Enter 'q' to quit any time.\n ")

while True:
    response = input("Language: ")

    if response == 'q':
        break
    language_survey.store_response(response)

# Show the survey results.
print("\nThank you to everyone that participated in the survey.")
language_survey.show_result()