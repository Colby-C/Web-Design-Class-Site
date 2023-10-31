function changeImageCut(newImageUrl, newName) {
    const centeredImage = document.getElementById('paper');
    centeredImage.src = 'cut.png';
  
    const imageName = document.getElementById('cut');
    imageName.innerText = cut;
  }

  function changeImageBurn(newImageUrl, newName) {
    const centeredImage = document.getElementById('paper');
    centeredImage.src = 'fire.png';
  
    const imageName = document.getElementById('burn');
    imageName.innerText = burn;
  }

  function changeImageCensor(newImageUrl, newName) {
    const centeredImage = document.getElementById('paper');
    centeredImage.src = 'censor.png';
  
    const imageName = document.getElementById('censor');
    imageName.innerText = censor;
  }

function updateImage() {
    const centeredImage = document.getElementById('paper');
    const imageName = document.getElementById('imageName');

    const cut = document.getElementById('cut');
    const burn = document.getElementById('burn');
    const censor = document.getElementById('censor');
    const color = document.getElementById('color');

    if (cut.classList.contains('active') && burn.classList.contains('active')) {
        centeredImage.src = 'fire-cut.png';
        imageName.innerText = 'Cut and Burn';
    } else if (cut.classList.contains('active') && censor.classList.contains('active')) {
        centeredImage.src = 'cut-censor.png';
        imageName.innerText = 'Cut and Censor';
    } else if (cut.classList.contains('active') && color.classList.contains('active')) {
        centeredImage.src = 'color-cut.png';
        imageName.innerText = 'Cut and Color';
    } else if (burn.classList.contains('active') && censor.classList.contains('active')) {
        centeredImage.src = 'fire-censor.png';
        imageName.innerText = 'Burn and Censor';
    } else if (burn.classList.contains('active') && color.classList.contains('active')) {
        centeredImage.src = 'color-fire.png';
        imageName.innerText = 'Burn and Color';
    } else if (censor.classList.contains('active') && color.classList.contains('active')) {
        centeredImage.src = 'censor-color.png';
        imageName.innerText = 'Censor and Color';
    }
else if (cut.classList.contains('active') && burn.classList.contains('active') && censor.classList.contains('active')) {
    centeredImage.src = 'fire-censor-cut.png';
    imageName.innerText = 'Cut, Burn, and Censor';
} else if (cut.classList.contains('active') && burn.classList.contains('active') && color.classList.contains('active')) {
    centeredImage.src = 'color-fire-cut.png';
    imageName.innerText = 'Cut, Burn, and Color';
} else if (cut.classList.contains('active') && censor.classList.contains('active') && color.classList.contains('active')) {
    centeredImage.src = 'cut-censor-color.png';
    imageName.innerText = 'Cut, Censor, and Color';
} else if (burn.classList.contains('active') && censor.classList.contains('active') && color.classList.contains('active')) {
    centeredImage.src = 'color-fire-censor.png';
    imageName.innerText = 'Burn, Censor, and Color';
} else if (cut.classList.contains('active') && burn.classList.contains('active') && censor.classList.contains('active') && color.classList.contains('active')) {
    centeredImage.src = 'color-fire-censor-cut.png';
    imageName.innerText = 'Cut, Burn, Censor, and Color';
}
}


document.getElementById('cut').addEventListener('click', function() {
    this.classList.toggle('active');
    updateImage();
});

document.getElementById('burn').addEventListener('click', function() {
    this.classList.toggle('active');
    updateImage();
});

document.getElementById('censor').addEventListener('click', function() {
    this.classList.toggle('active');
    updateImage();
});

document.getElementById('color').addEventListener('click', function() {
    this.classList.toggle('active');
    updateImage();
});