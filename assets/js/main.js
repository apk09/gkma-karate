
class GKMAFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- FOOTER STARTS HERE -->
        <footer>
            <nav class="navbar">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-3 offset-md-0 col-4 offset-4">
                            <img src="./assets/images/gkma_association_logo.png" class="img-fluid" alt="gkma_logo_image">
                        </div>
                        <div class="col-lg-5 offset-lg-1 col-md-5 d-none d-md-block">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5 class="text-white text-left font-weight-bold">SITEMAP</h5>
                                    <ul>
                                        <li class="text-left"><a href="./index.html" class="text-white">Home</a></li>
                                        <li class="text-left"><a href="./news.html" class="text-white">News</a></li>
                                        <li class="text-left"><a href="./events.html" class="text-white">Events</a></li>
                                        <li class="text-left"><a href="#" class="text-white" data-toggle="modal" data-target=".bd-example-modal-md">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5 class="text-white text-left font-weight-bold">STRUCTURE</h5>
                                    <ul>
                                        <li class="text-left"><a href="./members.html" class="text-white">Members</a></li>
                                        <li class="text-left"><a href="./dojo_instructors.html" class="text-white">Dojo Instructors</a></li>
                                        <li class="text-left"><a href="./black_belts.html" class="text-white">Black Belts</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-12">
                            <div class="gkma_socialNetworks text-center">
                                <div class="row">
                                    <div class="col-12">
                                        <a href="https://www.instagram.com/gkmakarate/" target="_blank" class="instagram"><i class="text-white fa fa-instagram"></i></a>
                                        <a href="https://www.facebook.com/Goju-Ryu-Karate-Do-Martial-Arts-Association-GKMA-570727929677080/" target="_blank" class="facebook"><i class="text-white fa fa-facebook"></i></a>
                                        <a href="https://twitter.com/gkma1996" target="_blank" class="google"><i class="text-white fa fa-twitter"></i></a>
                                        <a href="https://www.youtube.com/channel/UCeNTTAlIOSkq8__NzHU2jAQ" target="_blank" class="youtube"><i class="text-white fa fa-youtube"></i></a>
                                    </div>
                                    <div class="col-12">
                                        <button type="button" class="btn btn-dark btn-lg btn-block text-center" data-toggle="modal" data-target=".bd-example-modal-md">Contact Us</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="gkma_footerContainer">
                <p class="text-center">© 2026 GKMA. All Rights Reserved.</p>
            </div>
        </footer>
        <!-- FOOTER ENDS HERE -->
        <!-- CONTACT MODAL STARTS HERE -->
        <div class="modal fade bd-example-modal-md" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Contact Us</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Name:</b> Shankar C. Vishwakarma</h5>
                                        <p><b>Email:</b> shankarvishwakarma78@gmail.com</p>
                                        <p><b>Mobile:</b> +91-9867232895</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Name:</b> Kiran B. Khot</h5>
                                        <p><b>Email:</b> kirankhot91@gmail.com</p>
                                        <p><b>Mobile:</b> +91-9867232895</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>If you have a question or a comment, please email us at <u>gkma1996@gmail.com</u>.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- CONTACT MODAL ENDS HERE -->
        `;
    }
}

customElements.define('gkma-footer', GKMAFooter);

if (window.jQuery) {
    jQuery(function () {
        jQuery('.gkma_heroCarousel').carousel({
            interval: 5000,
            pause: false,
            ride: 'carousel'
        });
    });
}
