nostarch_url = 'https://nostarch.com'
print(nostarch_url.removeprefix('https://'))

# We can also store in a variable after using remove prefix
simple_url = nostarch_url.removeprefix('https://')
print(simple_url)