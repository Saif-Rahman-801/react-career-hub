const getAppliedData = () => {
  const existingData = localStorage.getItem("job-application");
  if (existingData) {
    return JSON.parse(existingData);
  }
  return [];
};

const saveJobApplications = (id) => {
  const storedJobApplications = getAppliedData();
  const exists = storedJobApplications.find((jobId) => jobId === id);
  if (!exists) {
    storedJobApplications.push(id);
    localStorage.setItem("job-application", JSON.stringify(storedJobApplications));
  }
};

export { getAppliedData, saveJobApplications };
