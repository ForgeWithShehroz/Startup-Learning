# def get_formatted_name(first, last):
#     """ Generate a neatlu formatted name. """
#     full_name = f"{first} {last}"
#     return full_name.title()

# A Failing Test # It will fail if the middle name is not present 
# solving this in next code

# def get_formatted_name(first, middle, last):
#     """ Generate a neatlu formatted name. """
#     full_name = f"{first} {middle} {last}"
#     return full_name.title()

def get_formatted_name(first, last, middle=''):
    """ Generate a neatlu formatted name. """
    if middle:
        full_name = f"{first} {middle} {last}"
    else:
        full_name = f"{first} {last}"
    return full_name.title()

