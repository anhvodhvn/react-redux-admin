const handleErrorMessage = (response) => {
    let { data: { code, message }, status, statusText } = response;
    let error = (code && message) ? `${status}: ${code} - ${message}` : `${status}: ${statusText}`;
    return error;
};

export default {
    handleErrorMessage
};