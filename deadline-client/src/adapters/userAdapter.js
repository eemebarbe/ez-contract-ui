import promiseWrapper from "./promiseWrapper"

class UserAdapter {
    editPrivateProfile = async (uid, email) => {}

    checkForNewSales = async (uid, snapshotLogic) => {}

    getReviews = async (uid) => {}

    addReview = async (reviewData) => {}

    getSales = async (uid, sales) => {}

    confirmUserEmail = async (email, href) => {}

    editProfile = async (uid, profileData) => {}

    filterUsers = async (filters) => {}

    monitorAuthState = (authStateLogic) => {}

    getAuthenticatedUser = () => {}

    signOut = async () => {}
}

export default new UserAdapter()
