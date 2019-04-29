const handleErrorMessage = (response) => {
    let { data, status, statusText } = response;
    let error = data.error ? data.error : `${status}: ${statusText}`;
    return error;
};

export default {
    handleErrorMessage
};