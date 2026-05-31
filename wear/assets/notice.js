const noticeText = "ওয়েবসাইট আজকে সকালে বন্ধ থাকবে";

const noticeElement = document.getElementById("top-notice");

if (noticeText.trim() !== "") {
    noticeElement.innerHTML = `
        <div class="bg-brand-blue text-brand-white text-center py-2 text-sm font-medium z-[150] relative">
            <span class="loop-shine">${noticeText}</span>
        </div>
    `;
}
