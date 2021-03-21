# Solution
This application is meant to demonstrate a react SPA interacting with an express/node server. The UI shows a list view of "job invitations" on one tab, and a list of "accepted jobs" on another tab. 

The "Invited" tab shows job invitation cards that allows the user to click Accept or Decline. Accepting a job will make it appear in the "Accepted" tab. Declining a job will remove it from the list.

# Video walkthrough
![Video 1](./docs/1.mp4)
![Video 2](./docs/2.mp4)
![Video 3](./docs/3.mp4)
![Video 4](./docs/4.mp4)
![Video 5](./docs/5.mp4)
![Video 6](./docs/6.mp4)
![Video 7](./docs/7.mp4)
![Video 8](./docs/8.mp4)
![Video 9](./docs/9.mp4)
![Video 10](./docs/10.mp4)
![Video 11](./docs/11.mp4)

# UI
The UI is built using create-react-app and includes these notable features:

- Routing using [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [React query](https://react-query.tanstack.com/overview) and `fetch` for API interaction
- [Styled components](https://styled-components.com/) and [Material UI](https://material-ui.com/getting-started/installation/) for styling
- [Moment JS](https://momentjs.com/) for date formatting
- Jest and [React testing library](https://testing-library.com/docs/react-testing-library/intro/) for unit tests
- [MSW](https://mswjs.io/docs/) for REST mocking


# Server
The server is built using nodejs and Typescript and includes these notable features:

- [Express](https://expressjs.com/) as web framework
- [typeorm](https://typeorm.io/#/) as ORM
- ts-jest as testing framework
- mysql as database

# Next steps
## Add login/registration
Since this application is for demo purposes, I chose to keep it simple by not integrating any concept of a user yet. But this does mean that any and all user of the application has access to all the data. As a next step, I would create a login and registration mechanism that would enable users to have their own accounts and no longer share all the data.

## Restrict API to return only results applicable to the current user.
Once the idea of a user with login/registration is added, I would add a `userId` column to the `job` table. Each user would then see only his/her own jobs. The API would then also be restricted to only allow view/update of entities that the current user should be able to see, i.e. contacts. 