import React, { useState } from "react";
import "./TemplatesPage.css"; // Importation de ta feuille de style
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"; // Icône de profil
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"; // Import de l'icône stylisée


const TemplatesPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // État pour gérer la recherche

  // Liste des templates
  const templates = [
    { id: 1, name: "Massively Template", img: "/images/massively.JPG", path: "/templates/template1/index.html" },
    { id: 2, name: "Spectral Template", img: "/images/spectral.JPG", path: "/templates/template2/index.html" },
    { id: 3, name: "Minimaxing Template", img: "/images/minimaxing.JPG", path: "/templates/template3/index.html" },
  ];

  // Fonction pour ouvrir la modale et afficher le contenu du template
  const openModal = (template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true); // Ouvre la modale
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTemplate(null);
  };

  const handleCustomizeTemplate = (template) => {
    console.log("Personnaliser :", template);
    // Rediriger vers une page de personnalisation ou effectuer une autre action
    window.location.href = `/customize-template/${template.id}`;
  };
  // Fonction pour filtrer les templates en fonction de la recherche
  const filteredTemplates = templates.filter((template) =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="templates-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">GenWeb</div>
        <div className="profile-icon">
        <FontAwesomeIcon icon={faUserCircle} size="2x" color="#fff" />

        </div>
      </nav>

      {/* Zone de recherche */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher des templates..."
          className="search-input"
          value={searchTerm} // Lier l'état à la valeur de l'input
          onChange={(e) => setSearchTerm(e.target.value)} // Mettre à jour l'état
        />
        <button className="search-button">Rechercher</button>
      </div>

      {/* Liste des templates */}
      <div className="templates-section">
        <h2>Choisissez un template</h2>
        <div className="templates-grid">
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template) => (
              <div
                className="template-card"
                key={template.id}
                onClick={() => openModal(template)}
              >
                <img
                  src={template.img}
                  alt={template.name}
                  className="template-image"
                />
                <h3>{template.name}</h3>
              </div>
            ))
          ) : (
            <p>Aucun template trouvé.</p> // Affiché si aucun template ne correspond
          )}
        </div>
      </div>

      {/* Modale avec le contenu du template */}
      {isModalOpen && selectedTemplate && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h2>Template : {selectedTemplate.name}</h2>
            {/* Affichage du contenu du template dans une iframe */}
            <iframe
              src={selectedTemplate.path}
              style={{ width: "100%", height: "600px", border: "none" }}
              title={selectedTemplate.name}
            ></iframe>
            {/* Ajout du bouton pour personnaliser */}
      <div className="modal-actions">
        <button
          className="customize-button"
          onClick={() => handleCustomizeTemplate(selectedTemplate)}
        >
          Personnaliser le template
        </button>
      </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplatesPage;
