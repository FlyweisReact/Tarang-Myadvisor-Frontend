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
  filterUniversities: (search, page, limit, search2) =>
    `user/search?keyword=${search}&page=${page}&limit=${limit}&keyword1=${
      search2 ? search2 : ""
    }`,
  allShortlistedUniversity: `user/getMylistedUniversities`,
  shortlistUniversity: "user/addUniversityInMyProfile",
  uploadUserDocument: "user/createUserDocument",
  getAllCourse: "admin/getAllCourses",
  getAllStates: "admin/getAllStates",
  getAllStreams: "admin/getAllStreams",
  // new api
  giveReview: "user/writeReviewToSelectedAdvisor",
  verifyAdwizorOtp: "advisor/verifyOtp",
  searchAdwizor: (search, page, limit) =>
    `user/searchAdvisor?keyword=${search ? search : ""}&page=${
      page ? page : 1
    }&limit=${limit ? limit : 10}`,
  getAllCities: "admin/getAllCities",
  getAdwizorProfile: "advisor/getadvisorProfile",
  updateAdwizorProfile: "advisor/updateAdvisorProfile",
  createAppointmentWithAdwizor: "user/createAppointment",
  getAllCountries: "admin/getAllCountries",
  confirmBooking: "user/verifyOtpAndBookAppointment",
  userAdwizors: "user/assign/advisor",
  adwizorStudent: "advisor/myStudent",
  getTopTenColleges: (search, page, limit) =>
    `admin/getTopUniversitiesByCountry?contryType=${
      search ? search : ""
    }&page=${page}&limit=${limit}`,
  filterIndianUniversitites: (search, page, limit) =>
    `user/universityByContry?contryType=India&keyword=${search}&page=${page}&limit=${limit}`,
  getUniversityDetails: (id) => `user/getUniversityById/${id}`,
  getNews: (search) => `user/getNewsByType/${search}`,
  getAdwizorsBlogs: "user/getAllBlogs/VERIFIED",
  adwizorOwnBlogs: "advisor/getAllBlogs",
  updateAdwizorStatus: "advisor/updateAdvisorLiveStatus",
  getHowItWorks: "user/getAll/HowItWork",
  user: {
    getAdwizorSlots: "advisor/getAdvisor/ByIdSlot",
    createAppointment: (id) => `user/createAppointment/${id}`,
    confirmAppointment: "user/verifyOtpAndBookAppointment",
    getAdwizorProfile: (id) => `user/getadvisorProfileReviewAndBlog/${id}`,
    getUniversitiesCourse: (name) =>
      `user/university/courses/${name}?page=1&limit=10`,
    getLiveAdwizors: "user/getAllAdvisorsLiveStatus",
    getUserMessages: "user/getUserMessagesofAdvisor",
    referUser: "user/refer",
    ourSuccessCount: "user/getAllSuccessInNumbers",
    getAllSypnosis: "user/getAllDestinations",
    searchCourses: (query) => `user/searchCoursesByName?courseName=${query}`,
    filterStates: (query) => `user/searchStatesByName?stateName=${query}`,
    filterStreams: (query) => `user/searchStreamsByName?streamName=${query}`,
    joinLiveMeeting: (id) => `user/JoinMeeting/${id}`,
    sendMessage: "user/sendMessageUserToAdvisor",
    resendOtp: "user/resendOtp",
    getAllTestimonial: "user/getAll/Testimonials",
    getCountryStudyDetails: (id) =>
      `user/getCountryDetailsDestinationByType?contryType=${id}`,
    getTutionFees: "admin/getUniversityTuitionFees",
    getMsgSubject: "admin/getAllSubjects",
  },
  adwizor: {
    applyforStudent: "advisor/applyAdvisorStudentUniversity",
    assignedStudents: "advisor/assignByAdmin",
    createStudent: "advisor/AddStudent",
    goLive: "advisor/createMeetingRoomBooking",
    getRequestMeetingUser: (id) => `advisor/getRequestedUser/${id}`,
    completeMeeting: (id) => `advisor/completeMeetingRoomBooking/${id}`,
    getUserProfile: (id) => `advisor/getUserProfile/${id}`,
    acceptMeetingRequest: (id) => `advisor/AcceptMeetingRequest/${id}`,
    rejectMeetingRequest: (id) => `advisor/RejectMeetingRequest/${id}`,
    joinedUser: (id) => `advisor/getJoinUser/${id}`,
    studentApplications: "advisor/myStudentapplication",
    myMessage: "advisor/getAdvisorMessages",
    sendMessage: "advisor/sendMessageAdvisor",
    getSlot: "advisor/getAdvisor/ByIdSlot",
    updateSlot: "advisor/advisorSlotUpdate",
    myBlogs: "advisor/getAllBlogs",
    createBlog: "advisor/addBlog",
    removeBlog: (id) => `advisor/deleteBlog/${id}`,
    updateBlog: (id) => `advisor/updateBlog/${id}`,
    updateUserProfile: (id) => `advisor/updateProfileByAdvisor/${id}`,
    getAppointments: (id) =>
      `advisor/appointmentsById/?appointmentStatus=${id}`,
    resendOtp: "advisor/resendOtp",
    updateApplicationStatus: (id) => `advisor/updateApplicationStatus/${id}`,
    getSources: "advisor/getSources",
    //-----
    createReview: "advisor/advisorWriteReview",
    getAllReviews: "advisor/getAllReviews",
    updateReview: (id) => `advisor/updateReview/${id}`,
    deleteReview: (id) => `advisor/deleteReview/${id}`,
  },
};

export default endPoints;
