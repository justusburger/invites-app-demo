import "@testing-library/jest-dom/extend-expect";

beforeEach(() => {
  document.body.innerHTML = `
    <style>
      #root {
        margin: 0 auto;
        width: 720px;
      }
    </style>
    <div id="root" />
  `;
});
