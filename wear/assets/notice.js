const noticeText = "এই ওয়েবসাইট এর কার্যক্রম অনির্দিষ্টকালের জন্য বন্ধ";

const noticeElement = document.getElementById("top-notice");

if (noticeText.trim() !== "") {
    noticeElement.innerHTML = `
        <div class="bg-brand-blue text-brand-white text-center py-2 text-sm font-medium z-[150] relative">
            <span class="loop-shine">${noticeText}</span>
        </div>
    `;
}
