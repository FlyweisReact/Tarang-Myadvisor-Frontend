/** @format */

const endPoints = {
  updateUserProfile: "user/updateUserProfile",
  userSignup: "user/signup",
  verifyOtp: "user/verifyOtp",
  getLoginBanner: "user/getLoginPage/Banner",
  adwizorBanner: "user/getBestAdvisor/Banner",
  studyAbroadBanner: "user/getStudyAboard/Banner",
  studyIndiaBanner: "user/getStudyIndia/Banner",
  connectWithAdwizorBanner: "user/getLive/Banner",
  getAllFeatures: "user/getAll/ChooseUs",
  getAllStudentOpinions: "user/getAll/AboutUs",
  getVerifiedAdwizors: "user/getVerified/Advisors",
  getUserProfile: "user/getUserProfile",
  getUserAddress: "user/getAddress",
  getAllUniversities: (page = 1, limit = 10) =>
    `user/getAll/University?page=${page}&limit=${limit}`,
  applyOnUniversities: `user/apply`,
  appliedUniversities: "user/my/University",
  filterUniversities: (search, page, limit) =>
    `user/search/Universities?keyword=${search}&page=${page}&limit=${limit}`,
  allShortlistedUniversity: `user/getMylistedUniversities`,
  shortlistUniversity: "user/addUniversityInMyProfile",
  uploadUserDocument: "user/createUserDocument",
  getAllCourse : "admin/getAllCourses",
  getAllStates : "admin/getAllStates",
  getAllStreams : "admin/getAllStreams"
};

export default endPoints;
