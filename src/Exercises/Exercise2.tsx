

const getUserOnlineMessage = (num?: number): string => {
    if (!num) {
    return String(num);
    }
};

function Exercise2() {
    return (
        <>
        <h2>Exercise 2</h2>
        <li>{getUserOnlineMessage(60)}</li>
        <li>{getUserOnlineMessage(0)}</li>
        <li>{getUserOnlineMessage()}</li>

        </>
    );
}

export default Exercise2
