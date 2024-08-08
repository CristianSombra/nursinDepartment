import React from "react";

/* Notificación para las LAR */
export const ModalQuestionLAR: React.FC = () => {
    return(
        <div className="col">
            <div
                className="modal fade"
                id="modal-5"
                tabIndex={-1}
                aria-hidden="true"
                aria-labelledby="modal-lar-label"
                role="dialog"
            >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4  id="modal-lar-label" className="modal-tittle fw-bold">Licencia Anual Reglamentaria</h4>
                    </div>
                        <div className="modal-body text-center">
                            <h5 className="my-3">
                                En caso de excedido los 15 días el agente deberá consultar con su Jefe Inmediato (Jefe de servicio) y en caso de autorizarlas debe presentar una nota de <strong>fuera de término</strong>.
                            </h5>
                            <h5 className="my-3">
                                ✅ Podrá ser utilizada durante todo el año.
                            </h5>
                            <h5 className="my-3">
                                🚫 No podrán adicionar en el día inmediato anterior ni posterior laborable de la Licencia Especial Invierno <strong>(LEI)</strong>.
                            </h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom-primary" data-bs-dismiss="modal">Volver</button>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

/* Notificación para las LEI */
export const ModalQuestionLEI: React.FC = () => {
    return(
        <div className="col">
            <div
                className="modal fade"
                id="modal-6"
                tabIndex={-1}
                aria-hidden="true"
                aria-labelledby="modal-lei-label"
                role="dialog"
            >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 id="modal-lei-label" className="modal-tittle fw-bold">Licencia Especial Invierno</h4>
                    </div>
                        <div className="modal-body text-center">
                            <h5 className="my-3">
                                En caso de excedido la semana el agente deberá consultar con su Jefe Inmediato (Jefe de servicio) y en caso de autorizarlas debe presentar una nota de <strong>fuera de término</strong>.
                            </h5>
                            <h5 className="my-3">
                                ✅ Podrá ser utilizada cualquier día de la semana, como menciona en en <strong>Artículo 6° del decreto 2024</strong>.
                            </h5>
                            <h5 className="my-3">
                                🚫 No podrán adicionar en el día inmediato anterior ni posterior laborable a la LEI por razones particulares <strong>(art. 14F y 14H)</strong>, ni Licencia anual reglamentaria <strong>(LAR)</strong>.
                            </h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom-primary" data-bs-dismiss="modal">Volver</button>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

/* Notificación para el artículo 14F */
export const Modal14F: React.FC = () => {
    return(
        <div className="col">
            <div
                className="modal fade"
                id="modal-7"
                tabIndex={-1}
                aria-hidden="true"
                aria-labelledby="modal-14f-label"
                role="dialog"
            >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 id="modal-14f-label" className="modal-tittle fw-bold">Licencia 14F</h4>
                    </div>
                        <div className="modal-body text-center">
                            <h5 className="my-3">
                                ✅ Deben solicitarse con <strong>48 hs de anticipación</strong> al Jefe Inmediato (Jefe del Servicio) y esperar su confirmación para ser autorizadas.
                            </h5>
                            <h5 className="my-3">
                                👉 Pueden ser dadas de baja por <strong>razones de servicio.</strong>
                            </h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom-primary" data-bs-dismiss="modal">Volver</button>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

/* Notificación para el artículo 14H */
export const Modal14H: React.FC = () => {
    return(
        <div className="col">
            <div
                className="modal fade"
                id="modal-8"
                tabIndex={-1}
                aria-hidden="true"
                aria-labelledby="modal-14h-label"
                role="dialog"
            >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 id="modal-14h-label" className="modal-tittle fw-bold">Licencia 14H</h4>
                    </div>
                        <div className="modal-body text-center">
                            <h5 className="my-3">
                                ✅ Deben solicitarse con <strong>48 hs de anticipación</strong> al Jefe Inmediato (Jefe del Servicio) y esperar su confirmación para ser autorizadas.
                            </h5>
                            <h5 className="my-3">
                                👉 Pueden ser dadas de baja por <strong>razones de servicio.</strong>
                            </h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom-primary" data-bs-dismiss="modal">Volver</button>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

