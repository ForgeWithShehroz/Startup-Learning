from name_function_01 import get_formatted_name

def test_first_last_name():
    formatted_name = get_formatted_name("Muhammad", "shehroz")
    assert formatted_name == "Muhammad Shehroz"


# Another function
def test_first_middle_last_name():
    """ Do names like 'Wolfgang Amadeus Mozart' work?"""
    formatted_name = get_formatted_name("wolfgang", "mozart", "amadeus")
    assert formatted_name == 'Wolfgang Amadeus Mozart'