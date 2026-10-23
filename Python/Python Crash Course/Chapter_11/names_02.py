from name_function_01 import get_formatted_name

print("Enter 'q' to quit any time! ")

while True:
    first = input("\nPlease enter your first name: ")
    if first == 'q'.lower() or first == 'q'.upper():
        break
    last = input("\nPlease enter your last name: ")
    if last == 'q'.lower() or last == 'q'.upper():
        break

    formatted_name = get_formatted_name(first, last)
    print(f"\tThe neatly formatted name is {formatted_name}.")