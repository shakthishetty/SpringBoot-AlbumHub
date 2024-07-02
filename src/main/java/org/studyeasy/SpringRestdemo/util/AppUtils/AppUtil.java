package org.studyeasy.SpringRestdemo.util.AppUtils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.web.multipart.MultipartFile;
import org.imgscalr.Scalr;

public class AppUtil {
    public static String PATH = "src\\main\\resources\\static\\uploads\\";

    public static String get_photo_upload_path(String fileName, String folder_name, long album_id) throws IOException {
        String path = PATH + album_id + "\\" + folder_name;
        Files.createDirectories(Paths.get(path));
        return new File(path).getAbsolutePath() + "\\" + fileName;

    }

    public static boolean delete_photo_from_path(String fileName, String folder_name, long album_id) {
        try {
            File f = new File(PATH + album_id + "\\" + folder_name + "\\"+fileName); // file to be delete
            if (f.delete()) 
            {
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

    }

    public static BufferedImage getThumbnail(MultipartFile orginalFile, Integer width) throws IOException {
        BufferedImage thumbImg = null;
        BufferedImage img = ImageIO.read(orginalFile.getInputStream());
        thumbImg = Scalr.resize(img, Scalr.Method.AUTOMATIC, Scalr.Mode.AUTOMATIC, width, Scalr.OP_ANTIALIAS);
        return thumbImg;
    }

    public static Resource getFileAsResource(long album_id, String folder_name, String file_name) throws IOException {
        String location = PATH + album_id + "\\" + folder_name + "\\" + file_name;
        File file = new File(location);
        if (file.exists()) {
            Path path = Paths.get(file.getAbsolutePath());
            return new UrlResource(path.toUri());
        } else {
            return null;
        }

    }

}
