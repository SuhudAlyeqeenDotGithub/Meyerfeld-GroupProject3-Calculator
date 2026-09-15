function NumButton(text) {
  return `
        <div class="num-pad__frame">
            <div class="num-pad__content" data-value="${text}">
                <span>
                    ${text}
                </span>
            </div>
        </div>
    `;
}
