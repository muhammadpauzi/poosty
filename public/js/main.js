const likeButtons = document.querySelectorAll('.btn-like');

likeButtons.forEach(btn => {
    btn.addEventListener('click', async function (e) {
        e.preventDefault();
        const { id } = this.dataset;
        try {
            const res = await fetch(`/posts/${id}/like`, { method: "POST" });
            const data = await res.json();
            const { likesCount } = await getLikes(id);
            this.previousElementSibling.textContent = `${likesCount}`;
            this.textContent = `${data.liked ? 'Unlike' : 'Like'}`;
        } catch (error) {
            console.error(error);
        }
    });
});

async function getLikes(id) {
    try {
        const res = await fetch(`/posts/${id}/like`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}