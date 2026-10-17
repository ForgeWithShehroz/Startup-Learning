from survery_05 import AnynonymousSurvey

def test_store_single_response():
    """ Test that a single response is stored correctly. """
    question = "Which language do you first learn to speak? "
    language_survey = AnynonymousSurvey(question)
    language_survey.store_response('English')

    assert 'English' in language_survey.responses

def test_store_three_responses():
    """ Test that three individual reponses stored properly. """
    question = "Which language did you learn to speak?"
    language_survey = AnynonymousSurvey(question)
    responses = ['English', 'Spanish', 'Urdu']
    for response in responses:
      language_survey.store_response(response)

    for response in responses:
       assert response in language_survey.responses