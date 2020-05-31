# ⚠ Setting up instructions ⚠

### 🐣 FORK the Project

It's not actually possible to create multiple forks of the same repository within the same Github account, so what you need to do is to duplicate this repository and set the original repo as an upstream remote to enable pulling changes from upstream.

[Github community thread on forking within the same account](https://github.community/t5/Support-Protips/Alternatives-to-forking-into-the-same-account/ba-p/7428)

Steps:

- Create a new repository on Github
  - Choose the Boilerplate repository as template
  - Make sure "Include all branches" is unchecked, we only want to carry over the Master branch
  - Repository name should follow this convention: `fp-class[class-number]`. For example `fp-class12`.
  - You may want to keep the repo private, but remember to set it public when project begins.
  - Add a suitable description and create the repository
- Add Boilerplate as remote to the new repository

  - Clone the newly created repository locally.
  - Run the following command:

```
git remote add boilerplate git@github.com:HackYourFuture-CPH/boilerplate-for-fp.git
```

- Verify the new remote by running:

```
git remote -v
```

You should now be able to pull changes from the boilerplate master branch by running this command in your newly created repository:

    git pull origin boilerplate master

### 💥Create

Develop branch ➡️ this boilerplate doesn't have a develop branch ➡️ [check here](https://github.com/HackYourFuture-CPH/boilerplate-for-fp/branches)

Make sure to set the develop branch to default.

### 🛡️ Protect

In the new repository set the branch protection settings so that merging to the master or develop branch requires PR reviews. Set the branch protection rules so it requires review from at least 1 codeowner and 1 regular member (i.e. student).

Also make sure to assign the team `final-project-mentors` to the repo and update the team to contain the mentors that should be able to review PRs with codeowners status.

### 🚼Change:

[favicon](https://github.com/HackYourFuture-CPH/boilerplate-for-fp/blob/master/public/favicon.ico)

### 🚨 Delete:

❌[GitHub logo](https://github.com/HackYourFuture-CPH/boilerplate-for-fp/blob/master/git-logo.png),  
❌[Heroku logo](https://github.com/HackYourFuture-CPH/boilerplate-for-fp/blob/master/heroku-logo.svg),  
❌[AWS logo](https://github.com/HackYourFuture-CPH/boilerplate-for-fp/blob/master/aws.svg),  
❌[S3 logo](https://github.com/HackYourFuture-CPH/boilerplate-for-fp/blob/master/s3.png),  
❌[Storybook logo](https://github.com/HackYourFuture-CPH/boilerplate-for-fp/blob/master/storybook.svg),  
❌[Swagger logo](https://github.com/HackYourFuture-CPH/boilerplate-for-fp/blob/master/swagger-logo.png)

## <img width=16px height=25px src="/heroku-logo.svg"  alt="Heroku logo"></a> Heroku

➡️ Create a Heroku Project  
➡️ Setup DB  
➡️ Add Env. variables

## <img width=30px height=30x src="/aws.svg" alt="AWS logo"></a> AWS

➡️ Create an AWS account/S3 bucket  
➡️ Add Env. variables
