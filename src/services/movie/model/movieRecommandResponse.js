export default class MovieRecommandResponse {
    reason
    error_code
    result = {
        title: '',
        url: '',
        m_url: '',
        data: []
    }
}