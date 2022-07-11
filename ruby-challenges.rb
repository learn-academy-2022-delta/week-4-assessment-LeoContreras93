# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_odd (number)
    if number % 2 == 0
        "number is even"
    else
        "number is odd"
    end
end
p even_odd(num1) #"number is odd"
p even_odd(num2) #"number is even"
p even_odd(num3) #"number is odd"



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# def vowel_removal(string)
#     string.delete("aeiouAEIOU")
#   end
#   p vowel_removal(album1) #"Rbbr Sl"
#   p vowel_removal(album2) #"Sgt Pppr"
#   p vowel_removal(album3) #"bby Rd"
        




# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# def palindrome string
#     if string.reverse == 'Racecar'
#         'Racecar is a palindrome'
#     elsif string.reverse == 'LEARN'
#         'LEARN is not a palindrome'
#     elsif string.reverse == 'Rotator'
#         'Rotator is a palindrome'
#     end
# end

def palindrome(string)
    if string.downcase == string.downcase.reverse
        "is a palindrome"
    else 
        "is not a palindrome"
    end
end


p palindrome(palindrome_tester1) #"racecaR"
p palindrome(palindrome_tester2) #"NRAEL"
p palindrome(palindrome_tester3) #"rotatoR"

#tried this method multiple ways  unable to get the expected response. Cannot figure out where I am going wrong. 