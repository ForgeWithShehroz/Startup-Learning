class AnynonymousSurvey:
    """ Collect anynonymous answers to a survey questions. """
    def __init__(self, question):
        """ Store a response and preapares to store all responses. """
        self.question = question

        self.responses = []

    def show_question(self):
        """ Show the survey question. """
        print(self.question)
    
    def store_response(self, new_response):
        """ Store the single response to a question. """
        self.responses.append(new_response)

    def show_result(self):
        """ Show all responses that have been given. """
        print("Survery results: ")
        for response in self.responses:
            print(f" - {response}")