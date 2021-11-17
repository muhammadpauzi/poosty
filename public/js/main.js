const likeButtons = document.querySelectorAll('.btn-like');

likeButtons.forEach(btn => {
    btn.addEventListener('click', async function (e) {
        e.preventDefault();
        const { id } = this.dataset;
        try {
            const res = await fetch(`/posts/${id}/like`, { method: "POST" });
            const data = await res.json();
            if (data.liked) {
                this.classList.add('btn-primary');
                this.classList.add('text-white');
            } else {
                this.classList.remove('btn-primary');
                this.classList.remove('text-white');
            }
            const { likesCount } = await getLikes(id);
            console.log(likesCount);
            this.textContent = `${likesCount} ${likesCount == 1 ? 'Like' : 'Likes'}`
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