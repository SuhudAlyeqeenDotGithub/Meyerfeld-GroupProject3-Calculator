function NumButton(text) {
  return `
        <div class="num-btn__frame" data-value="${text}">
            <div class="num-btn__content">
                <span>
                    ${text}
                </span>
            </div>
        </div>
    `;
}
