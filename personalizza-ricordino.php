<?php

/*
Plugin Name: Personalizza ricordino
Plugin URI: http://github.com/giaba90
Description: Un plugin contenente alcune regole per personalizzare il ricordino
Version: 1.2
Author: Gianluca Barranca
Author URI: http://www.gianlucabarranca.it
License: GPL2
*/

/**
 * Aggiungo i file js e css
 */
add_action( 'wp_enqueue_scripts', 'personalizza_ricordino_scripts' );

function personalizza_ricordino_scripts(){
//83 è l'id del ricordino speciale
  if( is_single(83) ){
  wp_enqueue_style('',plugins_url('ricordino-style.css', __FILE__));
      wp_enqueue_script('ricordino-script', plugins_url('ricordino-script.js', __FILE__) ,array(), '1.0.0', true);
  }
  else if( is_single(112)){
    wp_enqueue_script('ricordino-script2', plugins_url('ricordino-script2.js', __FILE__) ,array(), '1.0.0', true);
  }
}

/**
 * Obbligo che la quantità minima sia 30
 */
add_filter( 'woocommerce_quantity_input_args', 'lab_woocommerce_quantity_input_args', 11, 2 );

function lab_woocommerce_quantity_input_args( $args, $product ) {
  if ( is_single(83) ) {
//$args['input_value']  = 30;  // Valore di partenza (avrà effetto sulle pagine prodotto, non sul carrello)
  	$args['max_value']  = 999;  // Valore massimo
  	$args['min_value']  = 30;     // Valore minimo
  	$args['step']     = 10;    // Quantita incrementale ( se impostato a 2 visualizzerà multipli di 2)
  	return $args;

}
else{
 // $args['input_value']  = 30;  // Valore di partenza (avrà effetto sulle pagine prodotto, non sul carrello)

  	$args['max_value']  = 999;  // Valore massimo
  	$args['min_value']  = 30;     // Valore minimo
  	$args['step']     = 1;    // Quantita incrementale ( se impostato a 2 visualizzerà multipli di 2)
  	return $args;
	}
}

/**
 * Funzione per prezzo custom basato sulle quantità
*/

//woocommerce_cart_totals_after_order_total
add_action( 'woocommerce_after_calculate_totals', 'action_cart_calculate_totals', 10, 0 );
function action_cart_calculate_totals() {


    if ( is_admin() && ! defined( 'DOING_AJAX' ) )
        return;

    WC()->cart->subtotal_ex_tax = 0;

    WC()->cart->total = 0;
    foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {

      if($cart_item['product_id'] == 83 && $cart_item['quantity'] == 30){
           ## Displayed subtotal
            WC()->cart->subtotal_ex_tax += 58.50;

            WC()->cart->total += 58.50;

    }elseif ($cart_item['product_id'] == 83 && $cart_item['quantity'] > 30) {
           $q =  $cart_item['quantity'] - 30;
          ## Displayed subtotal
            WC()->cart->subtotal_ex_tax += ($q*1.5) + 58.50;

            WC()->cart->total += ($q*1.5) + 58.50;
        }
        else{
          WC()->cart->subtotal_ex_tax +=$cart_item['quantity']* 0.89;
      //    WC()->cart->total += $cart_item['quantity']* 0.89;
          WC()->cart->total = WC()->cart->subtotal_ex_tax+6;
          //calculate tax 22%
          $tax = (WC()->cart->total * 22)/100;
          //add tax to total
          WC()->cart->total +=$tax;
        }
  }
}




/**
* Filtro per cambiare il prezzo mostrato nel carrello
*/
add_filter( 'woocommerce_cart_item_subtotal', 'change_cart_item_subtotal', 10, 3 );
function change_cart_item_subtotal( $subtotal, $cart_item, $cart_item_key ) {

    if ($cart_item['product_id'] == 83 && $cart_item['quantity'] == 30 ) {
      //  $q =  $cart_item['quantity'] - 10;
        $price = 58.50;
        $subtotal = '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">€</span>'. sprintf("%.2f", $price) .'</span>';
    }
    elseif ($cart_item['product_id'] == 83 && $cart_item['quantity'] > 30) {
      $q =  $cart_item['quantity'] - 30;
      $price = ($q*1.5) + 58.50;
      $subtotal = '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">€</span>'. sprintf("%.2f", $price) .'</span>';
    }

    return $subtotal;
}

