

const formatDate = (difference: number): string => {
    const date = new Date()
    if(difference) {
        date.setDate(date.getDate() - Math.abs(difference))
    }
    return date.toISOString().split('T')[0]
}

export default formatDate