## Introduction  
This is an exercise aimed at building a Next.js and Prismic CMS app.  

A standard deployment of Next.js v14 was set up and then Prismic installed.  
Full details can be found here: https://prismic.io/docs/setup-nextjs  

## Running the app  
Often, the usual way of running an app is to clone the repository, run npm install, and add in your own .env variables then start working.  
In this case there are no .env variables.  
The only variable is the name of the repository held on Prismic which has a unique name and has been set up by the author of the app.  
This is accessed by the app so that the CMS operates as desired, but otherwise requires a login/password to make changes.  
The Prismic app repository also has a media library associated with it where the graphic files are stored.  
Thus if the code is cloned, it serves as a means of running the app on the local machine. The code can be changed in the components and slices to understand the impact. It could even be possible for the developer to create their own Prismic repo with slices, pages, graphics etc. and add the name of that repo into slicemachine.config.json as repositoryName.

## Screen shots of the app

![image](https://github.com/user-attachments/assets/1cb89a48-da6d-454b-ba17-d1d273ad9bdf)  

![image](https://github.com/user-attachments/assets/e15ed2f8-17f5-4cc1-8eb6-3753668a620b)  

![image](https://github.com/user-attachments/assets/70b38d5d-7dbe-4513-bd37-c8fb62cb778d)




## Reference  
The code was taken from a follow-along tutorial entitled Next.js Full Website Tutorial Course - with Prismic, Tailwind, and TypeScript which can be found on YouTube at:   https://www.youtube.com/watch?v=nfZu56KsK_Q  
This is a great tutorial for learning Prismic. The pace is just right and the explanation very clear.


