<style>
.toggleContainer {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
}

  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }
  input[type="checkbox"]:focus {
    outline: 0;
  }

  .toggle {
    height: 32px;
    width: 52px;
    border-radius: 16px;
    display: inline-block;
    position: relative;
    margin: 0 auto;
    border: 1px solid #d8eaff;
    background: linear-gradient(30deg, #3d67ff, #238dff);
    transition: all 0.2s ease;
  }
  .toggle:after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
    transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
  }
  .toggle:checked {
    border-color: #3590ff;
    background: linear-gradient(160deg, #F1F4FF, #F9FAFF);
  }
  .toggle:checked:after {
    transform: translatex(20px);
    background: linear-gradient(30deg, #3d67ff, #238dff);;
  }

  label {
      padding: 0 12px;
      margin-top: 5px;
  }
</style>

<div class="toggleContainer">
    <label for="modeToggle">Classic</label>
    <input type="checkbox" id="modeToggle" class="toggle" />
    <label for="modeToggle">Freestyle</label>
</div>
