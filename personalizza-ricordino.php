<?php

/*
Plugin Name: Personalizza ricordino
Plugin URI: http://github.com/giaba90
Description: Un plugin contenente alcune regole per personalizzare il ricordino
Version: 1.0
Author: Gianluca Barranca
Author URI: http://www.gianlucabarranca.it
License: GPL2
*/

/**
 * Aggiungo i file js e css
 */
add_action( 'wp_enqueue_scripts', 'personalizza_ricordino_scripts' );

function personalizza_ricordino_scripts(){
  if(is_product()){
 	wp_enqueue_style('',plugins_url('ricordino-style.css', __FILE__));
    	wp_enqueue_script('ricordino-script', plugins_url('ricordino-script.js', __FILE__) ,array(), '1.0.0', true);
  }
}

/**
 * Obbligo che la quantità minima sia 10
 */
add_filter( 'woocommerce_quantity_input_args', 'lab_woocommerce_quantity_input_args', 10, 2 );

function lab_woocommerce_quantity_input_args( $args, $product ) {
	if ( is_product() ) {
		$args['input_value'] 	= 2;	// Valore di partenza (avrà effetto sulle pagine prodotto, non sul carrello)
	}
	$args['max_value'] 	= 999; 	// Valore massimo
	$args['min_value'] 	= 10;   	// Valore minimo
	$args['step'] 		= 1;    // Quantita incrementale ( se impostato a 2 visualizzerà multipli di 2)
	return $args;
}

/**
 * Funzione per prezzo custom basato sulle quantità
 */
add_action( 'woocommerce_before_calculate_totals', 'woo_add_donation');

function woo_add_donation() {
    global $woocommerce;

    foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
        if( $cart_item['quantity'] > 10 && $cart_item['quantity'] <= 50 ){
            $cart_item['data']->set_price(2.50);
        }
				elseif ($cart_item['quantity'] > 50) {
					$cart_item['data']->set_price(2.0);
				}
    }
}