# 03-JavaScript-Password-Generator

<b> Description </b>

With the use of Java script Generates a Random Passwords with characters types specified by the user.
 
User can select which characters to include UpperCase, LowerCase, Numbers and/or Special Characters. User also selects the length of your password, the password length can be any number between 8 and 128 characters.

When the user presses the generate password button a window prompt will pop up requetsing the number of characters they want in password.
 
 
 ![numbers](https://user-images.githubusercontent.com/3950562/187989082-74907fef-db62-44c7-a6fb-ba8d272eb02c.png)

 
 Length needs to be between 8 to 128 characters, if out side this criteria Invalid prompt pop up and they will be returned to generate password button.
 
![image](https://user-images.githubusercontent.com/3950562/187994534-a98b73f4-1bd7-467e-9650-0b2339e58e2a.png)

The user is than required to answer 4  Yes (ok) or No (cancel) questions by folllowiong the  window prompts to confirm characters rto use in genertaing password.Uppercase/Lowercase letters, Numbers or Symbols
 
![image](https://user-images.githubusercontent.com/3950562/187994061-9ae7c749-1d84-4c7f-b001-fd181a1b895d.png)

If no character type selected INVALID prompt appears and user returned to genrate password page again.

![image](https://user-images.githubusercontent.com/3950562/187994978-98b99c00-d024-490a-a0bb-2a4aeec35a8d.png)

If user meets password length criteria and has selected at least one type of character catergoty to include, random password generated based on the users requests. 

 
Returned to main page and random password generated and displayed.
 
![image](https://user-images.githubusercontent.com/3950562/187995285-9fc95645-e3f3-4916-9a6c-933d6060edab.png)


The new password is generate by creating a new variable in Javascript that includes all the characters the users selected they want in the password.
With the help of Math.random() a random character from the variable containg all possible characters that meet the users specifications is selected.
The random character selection is looped by the number of times required to match user specified password length.


<b> Link </b>
 
https://geezee91.github.io/03-JavaScript-Password-Generator/ 
