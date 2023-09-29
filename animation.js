const transitionHeaders = document.querySelectorAll('.transition_header');

transitionHeaders.forEach((transition_header, index) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add a delay based on the index (adjust the delay value as needed)
                setTimeout(() => {
                    transition_header.classList.add('animate');
                }, index * 1000); // Delay each element by 500 milliseconds (adjust as needed)
                observer.unobserve(entry.target);
            }
        }, { threshold: 1 });
    });

    observer.observe(transition_header);
});
