function NumButton(text) {
  return `
        <div class="num-btn__frame">
            <div class="num-btn__content" data-value="${text}">
                <span>
                    ${text}
                </span>
            </div>
        </div>
    `;
}
