<?php

namespace App\Controller;

use App\Repository\ThemeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class InfoController extends AbstractController
{
    #[Route('/info', name: 'app_info')]
    public function index(ThemeRepository $themeRepository): Response
    {
        // Récupérer tous les thèmes avec leurs infos
        $themes = $themeRepository->findAll();

        // Rendre la vue Twig en passant les thèmes et leurs infos
        return $this->render('info/index.html.twig', [
            'themes' => $themes,
        ]);
    }
}
